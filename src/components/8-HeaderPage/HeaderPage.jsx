function HeaderPage({ title, icon }) {
  return (
    <h1 className="glass-card mb-5 p-3 w-100 text-center fw-bold">
      {icon} {title}
    </h1>
  );
}

export default HeaderPage;