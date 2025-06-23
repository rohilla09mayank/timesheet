function User({ user }) {
  const { name, avatar } = user;
  return (
    <div className="flex items-center gap-2">
      <div className="avatar">
        <div className="w-8 rounded-full">
          <img src={avatar || "default-user.jpg"} alt="user" />
        </div>
      </div>
      <span className="font-medium hidden sm:inline">{name}</span>
    </div>
  );
}

export default User;
