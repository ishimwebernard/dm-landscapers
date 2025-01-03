import { Button, Navbar } from "flowbite-react";
import { Card } from "flowbite-react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function AboutUs(){
    return (
        <div>
                     <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="https://res.cloudinary.com/bn47/image/upload/v1730644986/md-gardeners_uldkoq.png" className="h-24 w-24 mr-3" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MD Landscapers</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <a href="/contactus">
      <Button>Get started</Button></a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" active>About</Navbar.Link>
        <Navbar.Link href="/ourwork`">Our Work</Navbar.Link>
        <Navbar.Link href="/contactus">Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <div className="bg-[url('https://res.cloudinary.com/bn47/image/upload/v1730644003/IMG-20241103-WA0007_dm1ylf.jpg')] bg-cover h-96">
        <div className="w-full bg-black/50 flex flex-col justify-center items-center h-full">
        <p className="text-white text-4xl">About us</p>
        </div>
    </div>
    <div className="w-full flex flex-col justify-center items-center">
            <p className="w-3/4 text-xl mt-8">
    MD Landscaping is a landscape architecture practice based in Lilongwe, Malawi with projects around the capital city of Malawi. Established in 2021 in order to provide services to residential and commercial customers. Additionally, the company also provides designing, installation and maintenance.
    The company prides itself on the quality of service, knowledge and expertise in this business. Our commitment to a personal, imaginative, practical and cost effective services remains solid as our belief in sustainable future based on good design and strong partnership
    </p>
    </div>
    <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 w-3/4 space-x-4 mt-8 mb-8">
        <Card href="#" className="w-full">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Our Values
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Our vision as a company:
      <ul>
        <li>Become the top landscape company in regard to quality of service and customer service</li>
        <li>Maintain 85% positive feedback on customer service</li>
        <li>By fiscal year end 2025 employ 10 – 20 full time employees</li>
        <li>Create a carried on family business for 50 years or more</li>
      </ul>
      </p>
    </Card>
    <Card href="#" className="w-full">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Our Mission
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      MD mission is “to provide the country with unparalleled customer service, reliable quality product and service to stimulate the local economy by bringing employment opportunities to rural and urban areas
QUALITY ASSURANCE
All products      </p>
    </Card>
        </div>
    </div>

    <div>
        <p className="text-2xl text-center font-bold mt-10 mb-6">Meet the team</p>
        <div className="flex flex-col  items-center">
        <div className="grid grid-cols-2 space-x-2 py-24 space-y-4">
        <Card className="max-w-sm" imgSrc="https://res.cloudinary.com/bn47/image/upload/v1731871511/maur-y_stgtyu.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Team leader (Senior Landscaper)
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Maureen Misomali is a graduate with a BSc in Horticulture who has vast experience in landscape management and horticulture value chains. She graduated from the Lilongwe University of Agriculture and Natural Resources. She has worked for LUANAR as lab assistant. Prior to that she has also worked with Child Legacy and Bvumbwe Research Station in horticulture field before joining MD Landscapers as our team leader. She is responsible for day-to-day managing of the company      </p>
    </Card>
    <Card className="max-w-sm" imgSrc="https://res.cloudinary.com/bn47/image/upload/v1731871511/arthur-mak_ehtexk.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Lead Landscape Architect  
            </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Carolyn Lungu is a graduate with a BSc in Horticulture who has vast experience in landscape management and horticulture value chains. She graduated from the Lilongwe University of Agriculture and Natural Resources. She has worked with the Ministry of Transport and Public works in Malawi as a Landscape architect before joining MD Landscapers. She is responsible for the daily review of proposed designs and formulation of site designs from the scratch into 3D, aerial view and basic dimensions        </p>
    </Card>
    <Card className="max-w-sm" imgSrc="https://res.cloudinary.com/bn47/image/upload/v1731871511/smart-may_un0ecg.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Operations Officer        
          </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Arthur Makina is a graduate with a BSc in Enterprise Development and Microfinance from Lilongwe University of Agriculture and Natural Resources. He brings two years of experience from a reputable Micro Finance Institution. His work involves  contract management and negotiations to give our customers best value for money          </p>
    </Card>
        </div>
        </div>
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