import ContactMe from "./ContactMe";
import Footer from "./Footer";

function Hireme() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#141E30] to-[#243B55] pt-4 pb-24 min-h-[82.6vh]">
        <ContactMe
          heading="Hire Me"
          intro="Looking for a full-stack developer for your team or project? Tell me about the role or what you're building and I'll get back to you."
        />
      </div>
      <Footer />
    </>
  );
}

export default Hireme;
