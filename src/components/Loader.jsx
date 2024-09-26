const Loader = ({
    height="h-12",
    width="w-12",
    ariaLabel="oval-fill-loading",
}) => {
  return (
    <span ariaLabel={ariaLabel}
     className={`oval ${height} ${width}`}></span>
  )
}

export default Loader