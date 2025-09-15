import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 配置邮件传输器
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true, // QQ邮箱需要使用SSL
  auth: {
    user: '42386937@qq.com',
    pass: 'oaxrlrmquydcbgga',
  },
});

// 验证邮件配置是否正确
async function verifyTransporter() {
  try {
    await transporter.verify();
    console.log('邮件服务配置正确，可以发送邮件');
    return true;
  } catch (error) {
    console.error('邮件服务配置错误:', error);
    return false;
  }
}

export async function POST(request) {
  // 验证配置
  const isConfigValid = await verifyTransporter();
  if (!isConfigValid) {
    return NextResponse.json(
      { error: '邮件服务配置错误，请检查SMTP设置' },
      { status: 500 }
    );
  }

  try {
    const { subject, message, senderName } = await request.json();

    // 邮件选项
    await transporter.sendMail({
      from: senderName, // 发件人
      to: '42386937@qq.com',// 收件人
      subject: subject || '来自Next.js应用的邮件',
      text: message || '这是一封通过Next.js发送的测试邮件',
    });
    // const mailOptions = {
    //   from: process.env.QQ_EMAIL,
    //   to: senderName,
    //   subject: subject || '来自Next.js应用的邮件',
    //   text: message || '这是一封通过Next.js发送的测试邮件',
    //   // 如需HTML内容，可以添加html字段
    //   // html: `<p>${message}</p>`
    // };

    // // 发送邮件
    // const info = await transporter.sendMail(mailOptions);
    // console.log('邮件发送成功:', info.messageId);

    return NextResponse.json({
      success: true,
      message: '邮件发送成功',
      // messageId: info.messageId
    });

  } catch (error) {
    console.error('邮件发送失败:', error);
    return NextResponse.json(
      { error: '邮件发送失败，请稍后重试' },
      { status: 500 }
    );
  }
}
