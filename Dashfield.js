const DashedField = ({ value, onChange, label, type, required }) => {
  return (
    <TextField
      variant="standard"
      value={value}
      onChange={onChange}
      label={label}
      type={type}
      required={required}
      sx={{
        "& .MuiInputBase-input": {
          fontSize: "1rem",
          fontFamily: "Open Sans",
          fontWeight: "400",
          color: "#000000",
        },
        "& .MuiInput-underline:before": {
          borderBottom: "1px dashed #fff",
        },
        "& .MuiInput-underline:after": {
          borderBottom: "1px dashed #000000",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: "1px dashed #000000",
        },
      }}
    />
  );
};

export { DashedField };
