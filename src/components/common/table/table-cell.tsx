import { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function TableCell({
  children,
  align = "left",
  className = "",
}: TableCellProps) {
  return (
    <td className={`p-4 ${className}`} style={{ textAlign: align }}>
      {children}
    </td>
  );
}
