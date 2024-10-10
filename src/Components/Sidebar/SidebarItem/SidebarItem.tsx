interface Props {
  key: string;
  icon: string;
  title: string;
  onItemClicked: () => void;
  isActive: boolean;
}

const SidebarItem = ({ icon, title, onItemClicked }: Props) => {
  return (
    <p
      className="md:min-w-full text-blue-300 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      onClick={onItemClicked}
    >
      <i className={icon}></i>
      {title}
    </p>
  );
};

export default SidebarItem;
