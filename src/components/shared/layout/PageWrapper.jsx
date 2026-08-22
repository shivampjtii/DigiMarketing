const PageWrapper = ({ children, className = "" }) => {
  return (
    <main
      className={`min-h-screen w-full overflow-x-hidden bg-white text-black ${className}`}
    >
      {children}
    </main>
  );
};

export default PageWrapper;