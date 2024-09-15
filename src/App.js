import Accordion from "./components/Accordion";


function App() {
  return (
    <div className="flex flex-col mt-20 items-center">
    <div className="flex flex-col items-center space-y-4 text-center">
      <p className="rounded-lg px-6 py-2 text-white font-medium bg-[#171719] border border-white border-opacity-25">FAQS</p>
      <p className="text-white text-3xl">Frequently Asked Questions</p>
      <p className="text-white text-base">Find questions and answers related to your favorite programming languages and frameworks</p>
    </div>
      <Accordion/>
    </div>
  );
}

export default App;
