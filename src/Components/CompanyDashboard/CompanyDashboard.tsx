interface Props {
  tabItems: {
    id: number;
    title: string;
    icon: string;
    content: string;
  }[];
  activeSidebarItem: number;
  children: React.ReactNode;
}

export const CompanyDashboard: React.FC<Props> = ({
  tabItems,
  activeSidebarItem,
  children,
}: Props) => {
  return (
    <div className="relative md:ml-64 bg-blue-300 w-full">
      <div className="relative pt-10 pb-20 bg-lightBlue">
        <div className="px-4 md:px-6 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">{children}</div>
            <div className="flex flex-wrap">
              {tabItems.map(({ id, content }) => {
                return activeSidebarItem === id ? content : "";
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
