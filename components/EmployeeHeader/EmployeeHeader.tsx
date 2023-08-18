"use client";
import { useState, useEffect } from "react";
import { EmployeeHeaderNavType } from "@/types";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./EmployeeHeader.module.css";
import { useReactTable } from "@tanstack/react-table";

export default function EmployeeHeader({ nav }: EmployeeHeaderNavType) {
  const [activeTabRoute, setActiveTabRoute] = useState("/");
  const params = useParams();

  useEffect(() => {
    setActiveTabRoute(
      params.employeeDetails ? `/${params.employeeDetails}` : "/"
    );
  }, [params]);

  return (
    <header>
      <ul className={styles.infoNavList}>
        {nav.map((nav) => (
          <li>
            <Link
              href={`/employees/employee/${nav.route}`}
              className={`${styles.infoNavLink} ${
                nav.route === activeTabRoute && styles.infoNavLinkActive
              }`}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
