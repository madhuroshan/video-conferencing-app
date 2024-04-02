"use client";

import {
  CalendarPlus2,
  MergeIcon,
  PersonStanding,
  PlayCircle,
  PlusIcon,
} from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import HomeCard from "./HomeCard";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img={<PlusIcon size={38} />}
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => {
          setMeetingState("isInstantMeeting");
        }}
        className="bg-orange-1"
      />

      <HomeCard
        img={<CalendarPlus2 size={32} />}
        title="Schedule Meeting"
        description="Plan your meetings"
        handleClick={() => {
          setMeetingState("isScheduleMeeting");
        }}
        className="bg-purple-1"
      />
      <HomeCard
        img={<PlayCircle size={32} />}
        title="Recordings "
        description="Checkout Your Recordings"
        handleClick={() => {
          router.push("/recordings");
        }}
        className="bg-blue-1"
      />
      <HomeCard
        img={<MergeIcon size={38} />}
        title="Join Meeting"
        description="Join via Invitation Link"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
