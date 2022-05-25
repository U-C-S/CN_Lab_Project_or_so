import React, { useState } from "react";
import { OverbookedUiShell } from "../components/Layout";

export default function IndexPage() {
	return (
		<OverbookedUiShell>
			<p>{process.env.NEXT_PUBLIC_API_SERVER}</p>
		</OverbookedUiShell>
	);
}
