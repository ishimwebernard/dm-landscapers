import { Button, Navbar } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer } from "flowbite-react";


export default function Contact(){
    return(
        <div>
                                 <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="https://res.cloudinary.com/bn47/image/upload/v1730644986/md-gardeners_uldkoq.png" className="h-24 w-24 mr-3" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MD Landscapers</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="#">Our Work</Navbar.Link>
        <Navbar.Link href="/contactus" active>Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <div className="bg-[url('https://res.cloudinary.com/bn47/image/upload/v1730644004/IMG-20241103-WA0033_xvowin.jpg')] bg-cover h-96">
        <div className="w-full bg-black/50 flex flex-col justify-center items-center h-full">
        <p className="text-white text-4xl">Contact us</p>
        </div>
    </div>
  <div className="flex flex-col justify-center items-center">
  <div className="flex max-w-md flex-col gap-4 w-3/4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="small" value="Names" />
        </div>
        <TextInput id="small" type="text" sizing="sm" />
      </div>
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Your email" />
      </div>
      <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
    </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Title" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="large" value="Message" />
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      </div>
    </div>
    <div className="h-10"></div>
     <Button>Send Message</Button>
  </div>
   
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://res.cloudinary.com/bn47/image/upload/v1730644986/md-gardeners_uldkoq.png"
              alt="Flowbite Logo"
              name="MD LandScapers"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Nursery Gardening</Footer.Link>
                <Footer.Link href="#">Project Implementation</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="DM LandScapers" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
        </div>
    )
}