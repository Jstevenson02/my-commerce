const Navbar = () => {
  return (
    <>
      <div className="bg-purple-500 p-4 sticky top-0">
        <div className="flex flex-row gap-6 ">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/signin">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
