import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Geeth",
    lastName: "Dew",
    $id: "1",
    email: "Geeth@abc.com",
    userId: "1",
    dwollaCustomerUrl: "string",
    dwollaCustomerId: "string",
    address1: "string",
    city: "string",
    state: "string",
    postalCode: "string",
    dateOfBirth: "string",
    ssn: "string",
  };

  const banks = [
    {
      id: "1",
      availableBalance: 1200,
      currentBalance: 1000,
      officialName: "John Doe",
      mask: "0000",
      institutionId: "1",
      name: "John Doe",
      type: "string",
      subtype: "string",
      appwriteItemId: "123",
      sharableId: "456",
      $id: "1",
      accountId: "1",
      bankId: "1",
      accessToken: "string",
      fundingSourceUrl: "string",
      userId: "1",
    },
    {
      id: "12",
      availableBalance: 1000,
      currentBalance: 800,
      officialName: "John Smith",
      mask: "1111",
      institutionId: "1",
      name: "John Smith",
      type: "string",
      subtype: "string",
      appwriteItemId: "123",
      sharableId: "456",
      $id: "2",
      accountId: "2",
      bankId: "1",
      accessToken: "string",
      fundingSourceUrl: "string",
      userId: "1",
    },
  ];
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiency"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={banks} />
    </section>
  );
};

export default Home;
