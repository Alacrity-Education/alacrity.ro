import React from "react";

export function Card({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "h-96 w-80 flex flex-col relative overflow-clip p-3 bg-base-100 border-2 border-primary/20 shadow-2xl rounded-2xl " +
        (className ? className : "")
      }
    >
      {children}
    </div>
  );
}

export function CardImage({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "h-52 w-full relative max-w-full overflow-clip rounded-xl " +
        (className ? className : "")
      }
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={("h-full w-full relative pt-4 rounded-lg ") + (className ? className : "")}>{children}</div>
  );
}

export function CardCell({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "h-full w-full relative max-w-full max-h-full overflow-clip rounded-lg " +
        (className ? className : "")
      }
    >
      {children}
    </div>
  );
}

