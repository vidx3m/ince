import Link from "next/link";

export default function Home() {
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh", 
            backgroundColor: "#f8f8f8", 
            fontFamily: "Inter, sans-serif", 
            color: "#333", fontSize: "0.8rem" 
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
            <p style={{ fontSize: "1rem", maxWidth: "800px", marginBottom: "30px", color: "#555", lineHeight: "1.6" }}>
                Smarter Home and Auto insurance research and comparison, find the best coverage, effortlessly.
            </p>
            
            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                 
                padding: "10px", 
                borderRadius: "30px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                gap: "10px",
                maxWidth: "800px",
                width: "100%"
            }}>
                <label style={{ fontSize: "0.9rem", cursor: "pointer", display: "flex", alignItems: "center", color: "#ffffff", fontWeight: "bold" }}>
                    <input type="checkbox" id="home" name="insuranceType" value="home" style={{ marginRight: "5px" }} /> Home
                </label>
                <label style={{ fontSize: "0.9rem", cursor: "pointer", display: "flex", alignItems: "center", color: "#ffffff", fontWeight: "bold" }}>
                    <input type="checkbox" id="auto" name="insuranceType" value="auto" style={{ marginRight: "5px" }} /> Auto
                </label>
                
                <input 
                    type="text" 
                    placeholder="Postal Code" 
                    maxLength={7} 
                    style={{ 
                        padding: "10px", 
                        borderRadius: "20px", 
                        border: "1px solid #aaa", 
                        backgroundColor: "#f0f0f0", 
                        color: "#333", 
                        outline: "none", 
                        fontSize: "0.8rem",
                        width: "100px",
                        textAlign: "center"
                    }}
                />
                
                <Link href="/get-a-quote">
                    <button className="button" style={{ 
                        padding: "10px 20px", 
                        fontSize: "0.9rem", 
                        borderRadius: "0px", 
                        cursor: "pointer", 
                        backgroundColor: "#7afff5", 
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
            
            <div style={{ 
                marginTop: "100px", 
                backgroundColor: "#192938", 
                color: "#ffffff", 
                padding: "40px", 
                width: "100%", 
                textAlign: "center" 
            }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "20px" }}>How It Works</h2>
                <p style={{ fontSize: "0.9rem", maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
                    <strong>Step 1:</strong> Enter Your Details - Select the type of insurance you need, provide your postal code and relevant details.
                </p>
                <p style={{ fontSize: "0.9rem", maxWidth: "800px", margin: "20px auto", lineHeight: "1.6" }}>
                    <strong>Step 2:</strong> AI Comparison - Our AI scans multiple insurers and analyzes different coverage scenarios to get you optimized coverage for the best price.
                </p>
                <p style={{ fontSize: "0.9rem", maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
                    <strong>Step 3:</strong> Get Your Quote - Receive an optimized insurance quote tailored to your needs.
                </p>
            </div>
        </div>
    );
}