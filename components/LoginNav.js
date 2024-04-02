import * as React from "react";
import PropTypes from 'prop-types';

function Logo() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c2950ccf96b5561193f565b9a9c00471f01f0919f9f3b8371ee7a714cabe308?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
      alt="Company Logo"
      className="shrink-0 max-w-full aspect-[3.33] w-[164px]"
    />
  );
}

function NavItem({ children }) {
  return <div className="self-stretch my-auto">{children}</div>;
}

function ProfileIcon() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4820ec729e4199d5594281d88711b46bcf8dd0016605e46bd895917ea9661c2d?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&"
      alt="Profile Icon"
      className="shrink-0 self-stretch w-12 aspect-square"
    />
  );
}

function Header() {
  const navItems = [
    "Home",
    "About us", 
    "Testimonials",
    "Hire from Us",
    "FAQ",
    "Contact Us",
  ];

  return (
    <header className="flex gap-5 justify-between px-12 py-3 text-lg text-black border-b border-solid backdrop-blur-[50px] bg-white bg-opacity-80 border-zinc-300 max-md:flex-wrap max-md:px-5">
      <Logo />
      <nav className="flex gap-5 justify-between items-center self-start max-md:flex-wrap">
        {navItems.map((item, index) => (
          <NavItem key={index}>{item}</NavItem>
        ))}
        <ProfileIcon />
      </nav>
    </header>
  );
}
NavItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function App() {
  return (
    <div>
      <Header />
      {/* Rest of the app content */}
    </div>
  );
}