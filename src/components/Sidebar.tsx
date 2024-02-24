function Sidebar() {
  return (
    <div className="sidebar absolute z-[999]">
      <aside
        className="min-h-full fixed top-0 left-0 lg:w-96 w-40 flex flex-col 
           bg-base-300 pt-6 tablet:w-28"
      >
        <div
          role="tablist"
          className="tabs tabs-bordered flex flex-col items-center gap-y-10 mt-10 bg-base-300"
        ></div>
      </aside>
    </div>
  );
}

export default Sidebar;
