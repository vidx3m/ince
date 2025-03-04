import Link from "next/link";

export default function Home() {
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh", 
            backgroundColor: "#9d8e6d", 
            fontFamily: "Inter, sans-serif", 
            color: "#ffffff", fontSize: "0.7rem", 
            padding: "40px", 
            textAlign: "center",
            width: "100vw"
        }}>
            <h1 style={{ 
                fontSize: "2rem", 
                fontWeight: "600", 
                marginBottom: "10px", 
                color: "#192938", 
                fontFamily: "Norwester, sans-serif"
            }}>
                Insurance, simplified
            </h1>
            <p style={{ fontSize: "1rem", maxWidth: "500px", marginBottom: "30px", color: "#555", lineHeight: "1.6" }}>
                Smarter Home and Auto insurance research and comparison, find your best coverage, effortlessly.
            </p>
            
            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "5px", 
                backgroundColor: "#192938", 
                borderRadius: "15px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                maxWidth: "600px",
                width: "100%",
                gap: "10px"
            }}>
                <label style={{ fontSize: "0.7rem", cursor: "pointer", display: "flex", alignItems: "center", color: "#ffffff", fontWeight: "bold" }}>
                    <input type="checkbox" name="insuranceType" value="home" style={{ marginRight: "5px" }} /> Home
                </label>
                <label style={{ fontSize: "0.7rem", cursor: "pointer", display: "flex", alignItems: "center", color: "#ffffff", fontWeight: "bold" }}>
                    <input type="checkbox" name="insuranceType" value="auto" style={{ marginRight: "5px" }} /> Auto
                </label>
                <label style={{ fontSize: "0.7rem", color: "#ffffff", fontWeight: "bold" }}>Postal Code</label>
                <input 
                    type="text" 
                    placeholder="A1A 1A1" 
                    maxLength={7} 
                    style={{ 
                        padding: "5px", 
                        borderRadius: "20px", 
                        border: "1px solid #aaa", 
                        color: "#333", 
                        outline: "none", 
                        fontSize: "0.7rem",
                        width: "70px",
                        textAlign: "center"
                    }}
                />
                <Link href="/get-a-quote">
                    <button className="button" style={{ 
                        padding: "10px 20px", 
                        fontSize: "0.8rem", 
                        borderRadius: "8px", 
                        cursor: "pointer", 
                        backgroundColor: "#9d8e6d", 
                        color: "white", 
                        border: "none", 
                        fontWeight: "bold", 
                        transition: "all 0.3s ease-in-out",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)"
                    }}>
                        Start
                    </button>
                </Link>
            </div>
        <p style={{ fontSize: "0.7rem", color: "#555", textAlign: "center", marginTop: "40px" }}>
            Our AI scans multiple insurers and analyzes different coverage scenarios to get you optimized coverage for the best price.
        </p>
    </div>
    );
}
















