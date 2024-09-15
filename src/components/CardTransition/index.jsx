import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./styles.css";
import Hero from "../Hero";

const CreditCard = () => (
  <main>
      <Hero cardType="Virtual credit card" description="A virtual credit card is the digital equivalent of a physical credit card with a certain limit for the month. The bank or you can select a credit line, and you will have to take care of payment within the agreed period. Otherwise, interest will apply. This type of virtual credit card usually requires a prior risk assessment. Therefore, not all applicants qualify for this payment method."/>
  </main>
);

const DebitCard = () => (
  <main>
  <Hero cardType="Virtual debit card" description="If you would like to avoid risk assessment and instead use a virtual card without a credit line, a virtual debit card is right for you. When shopping, the connected bank account will be charged and the money will be deducted from your savings right away. Many providers offer unlimited virtual debit cards. This way, you can use one card for every website or service and never lose track of your payments—even the recurring ones."/>
  </main>
);

const Prepaid = () => (
  <main>
  <Hero cardType="Virtual prepaid card" description="A virtual prepaid card is ideal for one-time payments. Those burner cards can also be handed to people that are asked to buy or book online for you, as they only contain a certain amount that you chose to top up beforehand. Once it is empty, it can only be used again when more money is added."/>
  </main>
);

const Link = ({ to, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClicked = () => {
    const bars = document.getElementById("bars");

    bars?.classList.add("show");

    setTimeout(() => {
      bars?.classList.remove("show");
      bars?.classList.add("hide");
      navigate(to);
    }, 800);

    setTimeout(() => bars?.classList.remove("hide"), 1600);
  };

  return (
    <a
      className={
        location.pathname.includes(children?.toString().toLowerCase())
          ? "active"
          : ""
      }
      onClick={handleClicked}
    >
      {children}
    </a>
  );
};

const Bars = () => {
  return (
    <div id="bars" className="bars">
      <div />
      <div style={{ animationDelay: "0.1s" }} />
      <div style={{ animationDelay: "0.2s" }} />
      <div style={{ animationDelay: "0.3s" }} />
      <div style={{ animationDelay: "0.4s" }} />
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <nav className="z-10">
        <h1 className="font-bold">VirtualX</h1>
        <ul>
          <li>
            <Link to="/credit">Credit</Link>
          </li>
          <li>
            <Link to="/debit">Debit</Link>
          </li>
          <li>
            <Link to="/prepaid">Prepaid</Link>
          </li>
        </ul>
      </nav>

      <Bars />

      <Outlet />
    </>
  );
};

export const CardTransition = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="credit" element={<CreditCard />} />
          <Route path="debit" element={<DebitCard />} />
          <Route path="prepaid" element={<Prepaid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};