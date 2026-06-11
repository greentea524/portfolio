import React, { lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact.jsx";
import Loading from "../loading/Loading.jsx";

const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard.jsx"),
);
export default function Profile() {
  const prof = openSource.githubProfileData || null;

  if (openSource.display && openSource.showGithubProfile === "true" && prof) {
    return (
      <Suspense fallback={<Loading />}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
