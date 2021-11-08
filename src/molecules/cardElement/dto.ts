import { CustomButtonProps } from '../../atoms/button';

type CardElementProps = {
  imageSrc?: string;
  name: string;
  description?: string;
  buttonData: CustomButtonProps;
};

export default CardElementProps;
