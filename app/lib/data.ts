import React, { Component } from "react";

import { CiCalendar } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { FaRegRegistered } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";


export const data_Status = [
  { fullTitle: "Board", title: "Board", clr: "red", fieldTitle: "Board" },
  {
    fullTitle: "Participant",
    title: "Part",
    clr: "blue",
    fieldTitle: "Participant",
  },
  {
    fullTitle: "Affiliate",
    title: "Affi",
    clr: "purple",
    fieldTitle: "Affiliate",
  },
  {
    fullTitle: "Volunteer",
    title: "Vol",
    clr: "gray",
    fieldTitle: "Volunteer",
  },
  {
    fullTitle: "Voting Member",
    title: "Vote",
    clr: "pink",
    fieldTitle: "VotingMbr",
  },
  {
    fullTitle: "L-Voting Member",
    title: "L-Vote",
    clr: "hotpink",
    fieldTitle: "VotingMbr_Life",
  },
  { fullTitle: "CSG", title: "CSG", clr: "green", fieldTitle: "CSG" },
  { fullTitle: "Staff", title: "Staff", clr: "orange", fieldTitle: "Staff" },
  {
    fullTitle: "Donor",
    title: "Donor",
    clr: "red",
    fieldTitle: "Status_Donor",
  },
];

export const data_MainMenu = [
  { title: "Sign In", link: "/signin", query: { name: "test" } },
  { title: "Sign Out", link: "/signout", query: { name: "test" } },
  { title: "Member", link: "/members", query: { name: "test" } },
  { title: "Calendar", link: "/calendar", query: { name: "test" } },
  { title: "Registration", link: "/registration", query: { name: "test" } },
];

export const data_SideNavBar = [
  {
    title: "Calendar",
    link: "/calendar",
    IconComponent: CiCalendar,
  },
  {
    title: "Members",
    link: "/members",
    IconComponent: SlPeople,
  },
  {
    title: "Registration",
    link: "/registration",
    IconComponent: FaRegRegistered,
  },
  {
    title: "Snoozed",
    link: "#",
    IconComponent: CiStar,
  },
  {
    title: "Important",
    link: "#",
    IconComponent: CiStar,
  },
  { title: "Sent", link: "#", IconComponent: CiCalendar },
  {
    title: "Drafts",
    link: "#",
    IconComponent: CiCalendar,
  },
  {
    title: "Spam",
    link: "#",
    IconComponent: CiCalendar,
  },
];

export const MyComponent = {
  CiCalendar: CiCalendar,
  SlPeople: SlPeople,
};
