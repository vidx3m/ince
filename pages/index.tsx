import Link from "next/link";

export default function Home() {
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh", 
            backgroundColor: "#0D1117", 
            fontFamily: "Inter, sans-serif", 
            color: "#E6EDF3", 
            padding: "20px", 
            textAlign: "center"
        }}>
            <h1 style={{ fontSize: "4rem", fontWeight: "700", marginBottom: "10px", color: "#FFA500" }}>
                Insurance, Simplified
            </h1>
            <p style={{ fontSize: "1.5rem", maxWidth: "700px", marginBottom: "40px", color: "#AAB3C1", lineHeight: "1.8" }}>
                The AI-powered insurance comparison platform. Ince scans top insurers to find the most affordable and reliable coverage tailored for you.
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
                <label style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                    <input type="checkbox" id="home" name="insuranceType" value="home" style={{ marginRight: "8px" }} /> Home
                </label>
                <label style={{ fontSize: "1.2rem", cursor: "pointer" }}>
                    <input type="checkbox" id="auto" name="insuranceType" value="auto" style={{ marginRight: "8px" }} /> Auto
                </label>
            </div>
            
            <input 
                type="text" 
                placeholder="Enter Postal Code" 
                style={{ 
                    padding: "16px", 
                    borderRadius: "12px", 
                    width: "320px", 
                    textAlign: "center", 
                    fontSize: "1.2rem", 
                    border: "1px solid #30363D", 
                    backgroundColor: "#161B22", 
                    color: "#E6EDF3", 
                    outline: "none", 
                    marginBottom: "20px"
                }}
            />
            
            <br />
            
            <Link href="/get-a-quote">
                <button className="button" style={{ 
                    padding: "16px 32px", 
                    fontSize: "1.3rem", 
                    borderRadius: "12px", 
                    cursor: "pointer", 
                    backgroundColor: "#FFA500", 
                    color: "#0D1117", 
                    border: "none", 
                    transition: "all 0.3s ease-in-out", 
                    fontWeight: "bold" 
                }}>
                    Start
                </button>
            </Link>
            
            <div style={{ 
                marginTop: "80px", 
                maxWidth: "1100px", 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
                gap: "30px", 
                justifyContent: "center", 
                alignItems: "center",
                width: "100%",
                padding: "20px"
            }}>
                <div style={{ 
                    padding: "40px", 
                    borderRadius: "14px", 
                    backgroundColor: "#161B22", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", 
                    transition: "transform 0.3s ease-in-out", 
                }}>
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Step 1</h2>
                    <p style={{ fontSize: "1.2rem", color: "#AAB3C1" }}><strong>Enter Your Details:</strong> Provide your postal code and select the type of insurance you need.</p>
                </div>
                <div style={{ 
                    padding: "40px", 
                    borderRadius: "14px", 
                    backgroundColor: "#161B22", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", 
                    transition: "transform 0.3s ease-in-out", 
                }}>
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Step 2</h2>
                    <p style={{ fontSize: "1.2rem", color: "#AAB3C1" }}><strong>AI Comparison:</strong> Our AI scans multiple insurers to find the best rates for your situation.</p>
                </div>
                <div style={{ 
                    padding: "40px", 
                    borderRadius: "14px", 
                    backgroundColor: "#161B22", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", 
                    transition: "transform 0.3s ease-in-out", 
                }}>
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Step 3</h2>
                    <p style={{ fontSize: "1.2rem", color: "#AAB3C1" }}><strong>Get Your Quote:</strong> Receive an optimized insurance quote tailored to your needs.</p>
                </div>
            </div>
        </div>
    );
}