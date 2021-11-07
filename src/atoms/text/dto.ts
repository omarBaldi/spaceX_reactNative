export enum TextHierarchy {
  PRIMARY = 1,
  SECONDARY = 2,
}

type CustomTextProps = {
  value: string | number;
  hierarchy?: TextHierarchy;
};

export default CustomTextProps;
