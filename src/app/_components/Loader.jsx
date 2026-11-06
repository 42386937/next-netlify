"use client"
import { useEffect } from "react";
import { useProgress } from "@react-three/drei";

/**
 * Canvas 的加载指示器。
 *
 * 注意：这里以前用的是 drei 的 <Html>，它会在 <Canvas> 内部再创建一个
 * React root（ReactDOM.createRoot），并在 useLayoutEffect 的 cleanup 里
 * 同步调用 root.unmount() + 手动 target.removeChild(el)。
 *
 * React 19 在 commit 阶段同步卸载 root 时会报：
 *   "Attempted to synchronously unmount a root while React was already rendering"
 * 手动摘除一个不由 React 管理的 DOM 节点则可能抛：
 *   "Failed to execute 'removeChild' on 'Node'"
 *
 * 所以加载器改成普通 DOM 覆盖层，渲染在 <Canvas> 同级（外面），
 * 不再往 canvas 容器里插节点、也不再创建第二个 root。
 */
const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <div
      className='pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center'
      aria-hidden='true'
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </div>
  );
};

/**
 * 放在 <Canvas> 内部的 <Suspense> 里，自身不渲染任何东西。
 * 只有当同一个 Suspense 边界里的模型/贴图都加载完之后它才会挂载，
 * 此时通过 onReady(true) 通知外层的 DOM 把加载器收起来。
 */
export const SceneReady = ({ onReady }) => {
  useEffect(() => {
    onReady?.(true);
  }, [onReady]);

  return null;
};

export default CanvasLoader;
