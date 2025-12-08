import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ backgroundColor: '#b67183', padding: '20px', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
      <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>New Message - Website</h1>
    </div>

    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderTop: 'none', borderRadius: '0 0 8px 8px' }}>
      <p style={{ fontSize: '16px' }}>Hello,</p>
      <p style={{ fontSize: '16px' }}>
        <strong>{name}</strong> has sent you a new message through the contact form.
      </p>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
        <p style={{ margin: '5px 0' }}><strong>Name:</strong> {name}</p>
        <p style={{ margin: '5px 0' }}><strong>Email:</strong> {email}</p>
        <p style={{ margin: '5px 0' }}><strong>Subject:</strong> {subject}</p>
      </div>

      <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Message:</p>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #cccccc', padding: '15px', borderRadius: '5px', whiteSpace: 'pre-wrap', color: '#555' }}>
        {message}
      </div>

      <br />
      <div style={{ fontSize: '14px', color: '#888' }}>
        <p>This message was generated automatically. Please do not reply directly to this email.</p>
      </div>
    </div>
  </div>
);