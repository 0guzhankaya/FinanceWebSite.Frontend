import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Tile from "../../Components/Tile/Tile";

interface Props {}

const CompanyPage = (props: Props) => {
  // https:localhost:5173/
  let { ticker } = useParams();

  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={company.price.toString()} />
            <Tile title="Market Cap" subTitle={company.mktCap.toString()} />
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company Not Found:(</div>
      )}
    </>
  );
};

export default CompanyPage;
