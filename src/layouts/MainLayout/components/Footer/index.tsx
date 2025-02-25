import { ImageEnum } from "@/assets";
import { MailIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", path: "#" },
  { name: "About", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Archived", path: "#" },
  { name: "Author", path: "#" },
  { name: "Contact", path: "#" },
];

const customerService = [
  { name: "FAQ", path: "#" },
  { name: "Delivery", path: "#" },
  { name: "Return policy", path: "#" },
  { name: "Track your order", path: "#" },
  { name: "Our service", path: "#" },
  { name: "Share your feedback", path: "#" },
  { name: "Space parts", path: "#" },
  { name: "Product guarantees", path: "#" },
];

const Footer = () => {
  return (
    <div className="w-full min-h-[500px] bg-[#F6F6F7] dark:bg-[#141624] ">
      <div className="container">
        <div className="block lg:flex justify-between py-16">
          <div className="w-full sm:w-[280px] mb-12 lg:mb-8">
            <h3 className="text-base lg:text-lg text-primary font-semibold">About</h3>
            <p className="mt-3 text-secondary text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-6 text-secondary text-sm lg:text-base">
              <span className="font-semibold text-text">Email</span>: info@gmail.com
            </p>
            <p className="mt-1 text-secondary text-sm lg:text-base">
              <span className="font-semibold text-text">Phone</span>: 880 123 456 789
            </p>
          </div>

          <div className="w-full sm:w-auto mb-12 lg:mb-8">
            <h3 className="text-base lg:text-lg text-primary font-semibold">Quick Links</h3>
            <div className="mt-6 flex justify-between lg:flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.name} className="text-text text-sm lg:text-base" href={link.path}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-auto mb-12 lg:mb-8">
            <h3 className="text-base lg:text-lg text-primary font-semibold">Customer Service</h3>
            <div className="mt-6 md:flex justify-between lg:flex-col gap-2">
              {customerService.map((item) => (
                <Link
                  key={item.name}
                  className="text-text text-sm lg:text-base block mb-2 md:mb-0"
                  href={item.path}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full lg:w-[392px] bg-background rounded-lg px-9 py-8">
            <h3 className="text-lg lg:text-xl text-primary font-semibold text-center">
              Weekly Newsletter
            </h3>
            <p className="text-secondary text-center mt-2 text-sm lg:text-base">
              Get news articles and offers via email
            </p>
            <form className="mt-8">
              <div className="border rounded-sm border-input flex items-center gap-2 px-4 py-3">
                <Input
                  type="email"
                  className="border-none outline-none p-0 h-6 focus:outline-none focus-visible:ring-0 shadow-none text-sm lg:text-base"
                  placeholder="Enter your email"
                  required
                />
                <MailIcon
                  className="cursor-pointer hover:text-blue-600"
                  aria-label="Subscribe"
                />
              </div>
              <Button className="mt-2 w-full h-8 lg:h-12 bg-blue font-medium">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <Divider className="mb-4" />
        <div className="flex flex-col lg:flex-row items-center justify-between py-9">
          <Image className="dark:hidden" src={ImageEnum.logo} alt="Logo" width={158} height={30} />
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <Link href="#" className="text-text text-sm lg:text-base">
              Terms & Use
            </Link>
            <div className="w-[1px] h-4 bg-border" />
            <Link href="#" className="text-text text-sm lg:text-base">
              Privacy Policy
            </Link>
            <div className="w-[1px] h-4 bg-border" />
            <Link href="#" className="text-text text-sm lg:text-base">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
