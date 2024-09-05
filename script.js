document.addEventListener("DOMContentLoaded", function () {
  const skeletonProfile = document.querySelector(".skeleton-profile");
  const profileContent = document.querySelector(".profile-content");
  const avatar = document.getElementById("user-avatar");
  const name = document.getElementById("user-name");
  const bio = document.getElementById("user-bio");

  // Simulate a server fetch with a timeout (2 seconds)
  setTimeout(() => {
    // Simulated profile data
    const userData = {
      avatarUrl:
        "https://media.licdn.com/dms/image/v2/D4E03AQFhqWqqYX-oGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723286417020?e=1730937600&v=beta&t=ds6OQ9U0h8gPB-w0uX5LhcvRoPhx855OQUeYjYdHoKY", // Your picture URL
      name: "Doina Leovchin",
      bio: "Front-End Developer from Chisinau, focused on building accessible and meaningful web experiences with a commitment to continuous improvement.",
    };

    // Populate the profile content with the fetched data
    avatar.src = userData.avatarUrl;
    name.textContent = userData.name;
    bio.textContent = userData.bio;

    // Hide the skeleton screen and display the profile content
    skeletonProfile.style.display = "none";
    profileContent.style.display = "flex";
  }, 2000); // Simulate a 2-second delay for fetching data
});
