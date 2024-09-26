import React from 'react'
import connect from '../../assets/icons/connect.png'
import mail from '../../assets/icons/mail.png'
import recruit from '../../assets/icons/recruit.png'
import show from '../../assets/icons/show.png'
import writer from '../../assets/icons/writer.png'
import sheets from '../../assets/icons/sheets.png'
import workDrive from '../../assets/icons/work-drive.png'
import docs from '../../assets/icons/docs.png'
import cliq from '../../assets/icons/cliq.png'
import vault from '../../assets/icons/vault.png'
import profile from '../../assets/Profile.png'
import zoho from '../../assets/zoho.svg'

const Popover = () => {
  return (
    <nav className="fixed top-1/2 left-1/2 flex items-center justify-between w-3/4 h-18 p-5 bg-white rounded-lg shadow-md transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center">
        <span className="material-symbols-outlined grid place-items-center w-10 h-18 text-2xl"> menu </span>
        <img src={zoho} alt="Logo" className="w-12 mx-2" />
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-8 px-2 w-60 flex bg-gray-100 rounded-md">
            <span className="material-symbols-outlined grid place-items-center w-8 h-6 text-2xl">search</span>
            <input className="h-full w-full bg-transparent outline-none"/>
        </div>
        <span className="material-symbols-outlined grid place-items-center w-10 h-18 text-2xl transition-transform hover:scale-110 cursor-pointer">cloud</span>
        <span className="material-symbols-outlined grid place-items-center w-10 h-18 text-2xl transition-transform hover:scale-110 cursor-pointer"> settings </span>
        <span className="material-symbols-outlined grid place-items-center w-10 h-18 text-2xl transition-transform hover:scale-110 cursor-pointer">notifications</span>
        <img src={profile} alt="Profile" className="w-9 h-9 rounded-full object-cover transition-transform hover:scale-110 cursor-pointer" />
        <div className="dropdown relative grid place-items-center h-18">
          <button className="grid place-items-center w-9 h-9 bg-transparent relative rounded-full transition-transform hover:scale-110">
            <span className="material-symbols-outlined">apps</span>
          </button>
          <div className="absolute menu top-16 right-0 grid grid-cols-3 gap-3 w-64 max-h-72 p-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-y-auto opacity-0 transition-opacity duration-300">
            <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
                <span className={`w-14 h-14 scale-50 bg-[url(${connect})] bg-no-repeat`}></span>
                <span className="text-xs -translate-y-3">Connect</span>
            </button>
            <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
              <span className={`w-14 h-14 scale-50 bg-[url(${mail})] bg-no-repeat`}></span>
              <span className="text-xs -translate-y-3">Mail</span>
            </button>
            <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
              <span className={`w-14 h-14 scale-50 bg-[url(${recruit})] bg-no-repeat`}></span>
              <span className="text-xs -translate-y-3">Recruit</span>
            </button>
            <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
                <span className={`w-14 h-14 scale-50 bg-[url(${show})] bg-no-repeat`}></span>
                <span className="text-xs -translate-y-3">Show</span>
              </button>
              <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
                <span className={`w-14 h-14 scale-50 bg-[url(${writer})] bg-no-repeat`}></span>
                <span className="text-xs -translate-y-3">Writer</span>
              </button>
              <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
                <span className={`w-14 h-14 scale-50 bg-[url(${sheets})] bg-no-repeat`}></span>
                <span className="text-xs -translate-y-3">Sheet</span>
              </button>
              <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
                <span className={`w-14 h-14 scale-50 bg-[url(${workDrive})] bg-no-repeat`}></span>
                <span className="text-xs -translate-y-3">workDrive</span>
              </button>
              <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
                <span className={`w-14 h-14 scale-50 bg-[url(${docs})] bg-no-repeat`}></span>
                <span className="text-xs -translate-y-3">Docs</span>
              </button>
              <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
                <span className={`w-14 h-14 scale-50 bg-[url(${cliq})] bg-no-repeat`}></span>
                <span className="text-xs -translate-y-3">Cliq</span>
              </button>
              <button className="flex flex-col hover:bg-gray-100 items-center space-y-1">
                <span className={`w-14 h-14 scale-50 bg-[url(${vault})] bg-no-repeat`}></span>
                <span className="text-xs -translate-y-3">Vault</span>
              </button>
          </div>
        </div>
       
      </div>
    </nav>
  )
}

export default Popover