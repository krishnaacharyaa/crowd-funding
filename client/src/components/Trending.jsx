
import { loader } from "../assets";
import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import listItem from "./listItem";

const Trending=()=> {
  const [isLoading, setIsLoading] = useState(false);
	const [campaigns, setCampaigns] = useState([]);

	const { address, contract, getDonations,getTrendingCampaigns } = useStateContext();

	const fetchCampaigns = async () => {
		setIsLoading(true);
		const data = await getTrendingCampaigns();
		setCampaigns(data);
		setIsLoading(false);
	};

	useEffect(() => {
		if (contract) fetchCampaigns();
	}, [address, contract]);
  return (

    <div className=''>
      {isLoading && (
					<img
						src={loader}
						alt="loader"
						className="w-[100px] h-[100px] object-contain"
					/>
				)}
     {/* {!isLoading &&
					campaigns.length > 0 &&
					campaigns.map(  (campaign) => {
            listItem({title:campaign.title,getDonations,id:campaign.pId})
            // const data =  getDonations(campaign.pId);
						// <div className="text-white flex"> <div>{campaign.title} {data.length}</div></div>
          })} */}

{!isLoading &&
					campaigns.length > 0 &&
				listItem({ids:campaigns.map(campaign=>campaign.pId),getDonations})}

    </div>
    
  )
}

export default Trending