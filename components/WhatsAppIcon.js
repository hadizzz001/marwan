// components/WhatsAppIcon.js

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+9613682289" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '20px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <img
        src="https://res.cloudinary.com/dea3r5dn7/image/upload/v1744149679/ry0r5k1c7vv9atjwjx5s.png" // Replace with the correct path to your PNG file
        alt="WhatsApp"
        style={{
          width: '80px', 
          height: 'auto',
        }}
      />
    </a>
  );
};

export default WhatsAppIcon;
