import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import Link from "next/link";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="bg-slate-700
                              text-slate-200
                              text-sm
                              mt-16"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptop</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Return and Exchange</Link>
            <Link href="#">FAQ</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              At our electronics store, we are dedicated to providing the latest
              and greatest devices and accessories to our customers.
            </p>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
