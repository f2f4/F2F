import { TbToolsKitchen, TbPlant, TbMilk } from 'react-icons/tb';
import { BsGlobe2 } from 'react-icons/bs';
import { RiGovernmentLine } from 'react-icons/ri';
import { GiCarrot, GiFertilizerBag } from 'react-icons/gi';
import { MdReduceCapacity } from 'react-icons/md';

export const topics = [
  {
    name: 'dairy',
    icon: <TbMilk />,
  },
  {
    name: 'education',
    icon: <MdReduceCapacity />,
  },
  {
    name: 'fertilizer',
    icon: <GiFertilizerBag />,
  },
  {
    name: 'crops',
    icon: <GiCarrot />,
  },
  {
    name: 'scheme',
    icon: <RiGovernmentLine />,
  },
  {
    name: 'MixedFarming',
    icon: <TbPlant />,
  },
  {
    name: 'technology',
    icon: <BsGlobe2 />,
  },
  {
    name: 'tools',
    icon: <TbToolsKitchen />,
  },
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'F2F for Good','Advertise','Developers','Transparency','F2F Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]