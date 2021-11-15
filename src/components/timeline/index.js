import "./timeline.css";
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
import { fDateTime } from "../../utils/formatTime";

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool,
};

const Button = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};

function OrderItem({ item, isLast }) {
  const { type, title, time, value } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === "type1" && "primary.main") ||
              (type === "type2" && "success.main") ||
              (type === "type3" && "info.main") ||
              (type === "type4" && "warning.main") ||
              "error.main",
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <p className="title-text">{title}</p>
        {value === "Active" ? (
          <div className="widgetLgStatus">
            <Button type="active" />
          </div>
        ) : value === "Inactive" ? (
          <div className="widgetLgStatus">
            <Button type="inactive" />
          </div>
        ) : (
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            {value}
          </Typography>
        )}

        {time && (
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {fDateTime(time)}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline({ totalEstates }) {
  // ----------------------------------------------------------------------
  let TIMELINES;
  totalEstates
    ? (TIMELINES = [
        {
          title: "Name",
          value: "Sajid Shar",
          type: "type1",
        },
        {
          title: "Email",
          value: "admin@example.com",
          type: "type2",
        },
        {
          title: "Phone Number",
          value: "+1 0056 768",
          type: "type3",
        },
        {
          title: "Address",
          value: "10, Downing street",
          type: "type4",
        },
        {
          title: "Total Estates",
          value: "3",
          type: "type1",
        },
        {
          title: "status",
          value: "Active",
          type: "type2",
        },
        {
          title: "Created At",
          time: faker.date.past(),
          type: "type3",
        },
        {
          title: "Updated At",
          time: faker.date.past(),
          type: "type4",
        },
      ])
    : (TIMELINES = [
        {
          title: "Name",
          value: "Sajid Shar",
          type: "type1",
        },
        {
          title: "Email",
          value: "admin@example.com",
          type: "type2",
        },
        {
          title: "Phone Number",
          value: "+1 0056 768",
          type: "type3",
        },
        {
          title: "Address",
          value: "10, Downing street",
          type: "type4",
        },
        {
          title: "status",
          value: "Active",
          type: "type2",
        },
        {
          title: "Created At",
          time: faker.date.past(),
          type: "type3",
        },
        {
          title: "Updated At",
          time: faker.date.past(),
          type: "type4",
        },
      ]);

  // ----------------------------------------------------------------------

  return (
    <Card
      sx={{
        "& .MuiTimelineItem-missingOppositeContent:before": {
          display: "none",
        },
      }}
      className="timelineCard"
    >
      <CardHeader title="Details" />
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
