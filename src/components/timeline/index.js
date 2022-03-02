import faker from "faker";
import PropTypes from "prop-types";
// material
import { Card, Typography, CardHeader, CardContent } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot,
} from "@mui/lab";
// utils
import { fDate } from "../../utils/formatTime";

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool,
};

function OrderItem({ item, isLast }) {
  const { title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor: "primary.main",
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {fDate(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline({ totalEstates }) {
  // ----------------------------------------------------------------------
  const TIMELINES = [
    {
      title: "XYZ savings, ₦5000.00",
      time: faker.date.past(),
    },
    {
      title: "XYZ savings, ₦5000.00",
      time: faker.date.past(),
    },
    {
      title: "XYZ savings, ₦5000.00",
      time: faker.date.past(),
    },
    {
      title: "XYZ savings, ₦5000.00",
      time: faker.date.past(),
    },
    {
      title: "XYZ savings, ₦5000.00",
      time: faker.date.past(),
    },
  ];

  // ----------------------------------------------------------------------

  return (
    <Card
      sx={{
        "& .MuiTimelineItem-missingOppositeContent:before": {
          display: "none",
        },
      }}
    >
      <CardHeader title="Payment History" />
      <CardContent>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <OrderItem
              key={item.title}
              item={item}
              isLast={index === TIMELINES.length - 1}
            />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
