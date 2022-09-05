import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../../icons/body-part.png";
import TargetImage from "../../icons/target.png";
import EquipmentImage from "../../icons/equipment.png";
import { borderRadius } from "@mui/system";

const Details = ({
  exerciseDetail: { bodyPart, equipment, name, gifUrl, target },
}) => {
  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <Stack
      gap={"60px"}
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Vježbe te drže snažnim. {name} {` `}
          Je jedna od najboljih vježbi za ciljanje tvoje {target}. Pomoći će ti
          poboljšati tvoje raspoloženje i steći energiju.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h6" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
