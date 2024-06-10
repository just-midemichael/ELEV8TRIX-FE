import { Box, InputLabel } from "@mui/material";

const RegistrationForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Box>
        <InputLabel htmlFor="firstname">Firstname</InputLabel>
        <InputLabel htmlFor="middlename">Middlename</InputLabel>
        <InputLabel htmlFor="lastname">Lastname</InputLabel>
        <InputLabel htmlFor="gender">Gender</InputLabel>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
        <InputLabel htmlFor="bio">Bio</InputLabel>
        <InputLabel htmlFor="address">Home Address</InputLabel>
        <InputLabel htmlFor="state">State</InputLabel>
        <InputLabel htmlFor="country">Country</InputLabel>
      </Box>
      <Box></Box>
    </form>
  );
};

export default RegistrationForm;
