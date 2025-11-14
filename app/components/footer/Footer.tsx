 const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-t-[#25253F] text-sm flex justify-end items-center flex-wrap absolute bottom-0 ">
             <p className="py-4 px-4">
    Weather data provided by 
    <a href="https://open-meteo.com/" className="cursor-pointer italic underline ml-2" target="_blank">Open Meteo
    </a>
  </p>
        </footer>
    )
}

export default Footer;