export default function Contact({ user }) {
  return (
    <div className="contact hover3">
      <div className="contact_img">
        <img src={user?.user?.picture} alt="" />
      </div>
      <span>
        {user?.user?.name}
      </span>
    </div>
  );
}
