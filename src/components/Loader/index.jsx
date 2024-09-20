import React from 'react'
import "./Loader.css"

export const DoubleArrowTailSpin = ({
    height="h-12",
    width="w-12",
    borderTColor="border-t-[#531253]",
    borderBColor="border-b-white",
    ariaLabel="arrow-tail-spin-loading",
}) => {
  return (
    <span ariaLabel={ariaLabel}
     className={`double-arrow-tail-spin relative inline-block border-2 border-solid border-r-transparent border-l-transparent rounded-full box-border animate-spin ${borderTColor} ${borderBColor} ${height} ${width}`}></span>
  )
}

export const SingleArrowTailSpin = ({
    height="h-12",
    width="w-12",
    ariaLabel="arrow-tail-spin-loading",
}) => {
  return (
    <span ariaLabel={ariaLabel}
     className={`single-arrow-tail-spin ${height} ${width}`}></span>
  )
}

export const OvalFill = ({
    height="h-12",
    width="w-12",
    ariaLabel="oval-fill-loading",
}) => {
  return (
    <span ariaLabel={ariaLabel}
     className={`oval ${height} ${width}`}></span>
  )
}

export const DotSpinner = ({
    height="h-12",
    width="w-12",
    ariaLabel="dot-spinner",
}) => {
  return (
    <span ariaLabel={ariaLabel}
     className={`dot-spinner ${height} ${width}`}></span>
  )
}

export const FadInOutSpinner = ({
    height="h-12",
    width="w-12",
    ariaLabel="zoom-spinner",
}) => {
  return (
    <span ariaLabel={ariaLabel}
     className={`fadeInOut`}></span>
  )
}
export const BlockSpinner = ({
    height="h-12",
    width="w-12",
    ariaLabel="block-spinner",
}) => {
  return (
    <span ariaLabel={ariaLabel}
     className={`block-rotate`}></span>
  )
}