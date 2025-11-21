"use client";

import React from "react";

export default function AddToCalendar() {
  const handleDownload = () => {
    // 1. Event Configuration
    // Month is 0-indexed (11 = December)
    const startDate = new Date(2025, 11, 13, 12, 0);
    const endDate = new Date(2025, 11, 13, 23, 59); // Blocks the rest of the day

    const event = {
      title: "Event Title",
      description: "Event description goes here.",
      location: "44.446075, 26.094224",
      start: startDate,
      end: endDate,
      uid: `event-${Date.now()}@yourwebsite.com`, // Unique ID for the event
    };

    // 2. Helper to format date to UTC (YYYYMMDDTHHMMSSZ)
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
    };

    const startFormatted = formatDate(event.start);
    const endFormatted = formatDate(event.end);
    const nowFormatted = formatDate(new Date());

    // 3. Construct the ICS file content with Alarms
    // Note: \r\n is required for strict ICS compatibility
    const icsLines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Your Company//Your App//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${event.uid}`,
      `DTSTAMP:${nowFormatted}`,
      `DTSTART:${startFormatted}`,
      `DTEND:${endFormatted}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,

      // --- REMINDER 1: 1 Day Before ---
      "BEGIN:VALARM",
      "TRIGGER:-P1D", // Minus Period 1 Day
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder: Tomorrow is the big event",
      "END:VALARM",

      // --- REMINDER 2: Day of Event (1 Hour Before) ---
      "BEGIN:VALARM",
      "TRIGGER:-PT1H", // Minus Period Time 1 Hour (Alerts at 9 AM)
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder: Event starts in 1 hour",
      "END:VALARM",

      "END:VEVENT",
      "END:VCALENDAR",
    ];

    const icsContent = icsLines.join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "event-invite.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      className="btn btn-primary bg-gradient-to-l from-[#b67183] to-[#8a82ae] border-0 hover:brightness-120"
      onClick={handleDownload}
    >
      Save the date
    </button>
  );
}
