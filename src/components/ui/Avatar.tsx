
import React from "react";

interface AvatarProps {
  firstName: string;
  lastName: string;
  className?: string;
}


const Avatar: React.FC<AvatarProps> = ({
  firstName,
  lastName,
  className = "",
}) => {
  const initials = `${firstName?.trim().charAt(0) ?? ""}${
    lastName?.trim().charAt(0) ?? ""
  }`.toUpperCase();

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#4F46E5] text-xs font-semibold text-white select-none ${className}`}
      aria-label={`${firstName} ${lastName}`}
    >
      {initials || "?"}
    </div>
  );
};

export default Avatar;
