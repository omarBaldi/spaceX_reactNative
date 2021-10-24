export interface TabScreenI {
  name: string;
  children: any;
}

type TabNavigatorProps = {
  tabNavigatorData: TabScreenI[];
};

export default TabNavigatorProps;
