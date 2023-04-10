import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const FrameComponent = () => {
  return (
    <div className="relative bg-w-background w-full h-[2349.69px] overflow-hidden text-left text-5xl text-black font-noto-sans">
      <div className="absolute top-[86px] left-[67px] rounded-6xl bg-w-background shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] box-border w-[1066px] h-[155px] overflow-hidden opacity-[0.97] border-[1px] border-solid border-dimgray">
        <div className="absolute top-[36px] left-[91px] w-[100px] h-[100px] overflow-hidden" />
      </div>
      <div className="absolute top-[42px] left-[73px] leading-[24px] inline-block w-[365px] h-[45px]">
        TITLE
      </div>
      <div className="absolute top-[318px] left-[64px] rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] box-border w-[1069px] h-24 border-[1px] border-solid border-dimgray" />
      <div className="absolute top-[268px] left-[65px] leading-[24px] inline-block w-80 h-[51px]">
        FIRST NAME
      </div>
      <div className="absolute top-[500px] left-[64px] rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] border-[1px] border-solid border-dimgray" />
      <div className="absolute top-[454px] left-[73px] leading-[24px] inline-block w-[261px] h-[47px]">
        LAST NAME
      </div>
      <div className="absolute top-[648px] left-[73px] leading-[24px] inline-block w-[244px] h-[35px]">
        PROVINCE
      </div>
      <div className="absolute top-[688px] left-[65px] rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[491px] h-[250px] flex flex-col items-start justify-start gap-[8px] text-dimgray">
        <div className="self-stretch relative leading-[18px] font-semibold hidden">
          Dropdown Title
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <Form.Group className="[border:none] bg-[transparent] self-stretch">
            <Form.Label>Dropdown option</Form.Label>
            <Form.Control type="text" placeholder="Input placeholder" />
          </Form.Group>
          <Button className="self-stretch" variant="primary">
            Dropdown option
          </Button>
          <Form.Group className="[border:none] bg-[transparent] self-stretch">
            <Form.Label>Dropdown option 1</Form.Label>
            <Form.Control type="text" placeholder="Input placeholder" />
          </Form.Group>
          <Form.Group className="[border:none] bg-[transparent] self-stretch">
            <Form.Label>Dropdown option 2</Form.Label>
            <Form.Control type="text" placeholder="Input placeholder" />
          </Form.Group>
        </div>
      </div>
      <div className="absolute top-[655px] left-[631px] w-[501px] h-[354px] overflow-hidden">
        <div className="absolute top-[2px] left-[15px] leading-[24px] inline-block w-[318px] h-10">
          DISTRICT
        </div>
        <div className="absolute top-[58px] left-[6px] rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[458px] h-[90px] overflow-hidden border-[1px] border-solid border-dimgray" />
        <div className="absolute top-[168px] left-[17px] leading-[24px] inline-block w-[328px] h-[43px]">
          CITY
        </div>
        <div className="absolute top-[235px] left-[6px] rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[458px] h-[65px] overflow-hidden border-[1px] border-solid border-dimgray" />
      </div>
      <div className="absolute top-[989px] left-[75px] w-[1028px] h-[113px] overflow-hidden text-dimgray">
        <div className="absolute top-[0px] left-[0px] w-[1028px] h-[83px] flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative leading-[18px] text-black">
            Email address
          </div>
          <div className="self-stretch rounded-lg bg-w-background flex flex-col p-4 items-start justify-start text-base border-[1px] border-solid border-lightgray">
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative leading-[24px] inline-block w-[304px] shrink-0">
                Enter Your Email Adress
              </div>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden opacity-[0]"
                alt=""
              />
            </div>
          </div>
          <div className="self-stretch relative text-xs leading-[18px] hidden [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#666]">
            Assistive Text
          </div>
        </div>
      </div>
      <div className="absolute top-[1126px] left-[65px] w-[1028px] h-[113px] overflow-hidden text-dimgray">
        <div className="absolute top-[0px] left-[0px] w-[1028px] h-[83px] flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative leading-[18px] text-black">
            Phone Number
          </div>
          <div className="self-stretch rounded-lg bg-w-background flex flex-col p-4 items-start justify-start text-base border-[1px] border-solid border-lightgray">
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative leading-[24px] inline-block w-[304px] shrink-0">
                Enter Your Phone Number
              </div>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden opacity-[0]"
                alt=""
              />
            </div>
          </div>
          <div className="self-stretch relative text-xs leading-[18px] hidden [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#666]">
            Assistive Text
          </div>
        </div>
      </div>
      <div className="absolute top-[1126px] left-[65px] w-[1028px] h-[113px] overflow-hidden text-dimgray">
        <div className="absolute top-[0px] left-[0px] w-[1028px] h-[83px] flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative leading-[18px] text-black">
            Phone Number
          </div>
          <div className="self-stretch rounded-lg bg-w-background flex flex-col p-4 items-start justify-start text-base border-[1px] border-solid border-lightgray">
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative leading-[24px] inline-block w-[304px] shrink-0">
                Enter Your Phone Number
              </div>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden opacity-[0]"
                alt=""
              />
            </div>
          </div>
          <div className="self-stretch relative text-xs leading-[18px] hidden [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#666]">
            Assistive Text
          </div>
        </div>
      </div>
      <div className="absolute top-[1246px] left-[72px] w-[1060px] h-[229px] overflow-hidden">
        <div className="absolute top-[2px] left-[2px] leading-[24px] inline-block w-80 h-[55px]">
          FUND RAISER STORY
        </div>
        <div className="absolute top-[62px] left-[0px] rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] box-border w-[1062px] h-[255px] overflow-hidden border-[2px] border-solid border-dimgray" />
      </div>
      <div className="absolute top-[1507px] left-[58px] rounded-6xl box-border w-[409px] h-[394px] overflow-hidden border-[1px] border-solid border-black">
        <div className="absolute top-[0px] left-[17px] leading-[24px] inline-block w-[390px] h-12">
          PROFILE PICTURE
        </div>
      </div>
      <div className="absolute top-[1936px] left-[38px] w-[1094px] h-[177px] overflow-hidden text-dimgray">
        <div className="absolute top-[32px] left-[65px] w-[1028px] h-[113px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[1028px] h-[83px] flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[18px] text-black">
              Social Media Link
            </div>
            <div className="self-stretch rounded-lg bg-w-background flex flex-col p-4 items-start justify-start text-base border-[1px] border-solid border-lightgray">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[24px] inline-block w-[304px] shrink-0">
                  Enter Your Social media link
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden opacity-[0]"
                  alt=""
                />
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[18px] hidden [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#666]">
              Assistive Text
            </div>
          </div>
        </div>
        <div className="absolute top-[32px] left-[65px] w-[1028px] h-[113px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[1028px] h-[83px] flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[18px] text-black">
              Social Media Link
            </div>
            <div className="self-stretch rounded-lg bg-w-background flex flex-col p-4 items-start justify-start text-base border-[1px] border-solid border-lightgray">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[24px] inline-block w-[304px] shrink-0">
                  Enter Your Social media link
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden opacity-[0]"
                  alt=""
                />
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[18px] hidden [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#666]">
              Assistive Text
            </div>
          </div>
        </div>
        <div className="absolute top-[32px] left-[65px] w-[1028px] h-[113px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[1028px] h-[83px] flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[18px] text-black">
              Social Media Link
            </div>
            <div className="self-stretch rounded-lg bg-w-background flex flex-col p-4 items-start justify-start text-base border-[1px] border-solid border-lightgray">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[24px] inline-block w-[304px] shrink-0">
                  Enter Your Social media link
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden opacity-[0]"
                  alt=""
                />
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[18px] hidden [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#666]">
              Assistive Text
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2155px] left-[35.91px] w-[1096px] h-[172px] overflow-hidden text-dimgray">
        <div className="absolute top-[16.04px] left-[59px] w-[1028px] h-[113px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[1028px] h-[83px] flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[18px] text-black">
              Validation Document
            </div>
            <div className="self-stretch rounded-lg bg-w-background flex flex-col p-4 items-start justify-start text-base border-[1px] border-solid border-lightgray">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[24px] inline-block w-[304px] shrink-0">
                  jenny khatey
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden opacity-[0]"
                  alt=""
                />
              </div>
            </div>
            <div className="self-stretch relative text-xs leading-[18px] hidden [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#666]">
              Assistive Text
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
