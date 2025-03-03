import Link from "next/link";

export default function Home() {
    return (
        <div style={{ 
            textAlign: "center", 
            padding: "50px 20px", 
            backgroundColor: "#0D1117", 
            fontFamily: "Inter, sans-serif", 
            minHeight: "100vh", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            color: "#E6EDF3" 
        }}>
            <h1 style={{ fontSize: "3.5rem", fontWeight: "600", marginBottom: "10px", color: "#FFA500" }}>
                Insurance, Simplified
            </h1>
            <p style={{ fontSize: "1.3rem", maxWidth: "600px", marginBottom: "30px", color: "#AAB3C1", lineHeight: "1.6" }}>
                The AI-powered insurance comparison platform. Ince scans top insurers to find the most affordable and reliable coverage tailored for you.
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
                <label style={{ fontSize: "1.1rem", color: "#E6EDF3", cursor: "pointer" }}>
                    <input type="checkbox" id="home" name="insuranceType" value="home" style={{ marginRight: "8px" }} /> Home
                </label>
                <label style={{ fontSize: "1.1rem", color: "#E6EDF3", cursor: "pointer" }}>
                    <input type="checkbox" id="auto" name="insuranceType" value="auto" style={{ marginRight: "8px" }} /> Auto
                </label>
            </div>
            
            <input 
                type="text" 
                placeholder="Enter Postal Code" 
                style={{ 
                    padding: "14px", 
                    borderRadius: "10px", 
                    width: "300px", 
                    textAlign: "center", 
                    fontSize: "1rem", 
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
                    fontSize: "1.2rem", 
                    borderRadius: "12px", 
                    cursor: "pointer", 
                    backgroundColor: "#FFA500", 
                    color: "#0D1117", 
                    border: "none", 
                    transition: "all 0.3s", 
                    fontWeight: "bold" 
                }}>
                    Start
                </button>
            </Link>
            
            <div style={{ 
                marginTop: "60px", 
                maxWidth: "900px", 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                gap: "20px", 
                justifyContent: "center", 
                alignItems: "center" 
            }}>
                <div style={{ 
                    padding: "30px", 
                    borderRadius: "14px", 
                    backgroundColor: "#161B22", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", 
                    transition: "transform 0.3s ease" 
                }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#E6EDF3" }}>Step 1</h2>
                    <p style={{ fontSize: "1.1rem", color: "#AAB3C1" }}><strong>Enter Your Details:</strong> Provide your postal code and select the type of insurance you need.</p>
                </div>
                <div style={{ 
                    padding: "30px", 
                    borderRadius: "14px", 
                    backgroundColor: "#161B22", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", 
                    transition: "transform 0.3s ease" 
                }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#E6EDF3" }}>Step 2</h2>
                    <p style={{ fontSize: "1.1rem", color: "#AAB3C1" }}><strong>AI Comparison:</strong> Our AI scans multiple insurers to find the best rates for your situation.</p>
                </div>
                <div style={{ 
                    padding: "30px", 
                    borderRadius: "14px", 
                    backgroundColor: "#161B22", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", 
                    transition: "transform 0.3s ease" 
                }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#E6EDF3" }}>Step 3</h2>
                    <p style={{ fontSize: "1.1rem", color: "#AAB3C1" }}><strong>Get Your Quote:</strong> Receive an optimized insurance quote tailored to your needs.</p>
                </div>
            </div>
        </div>
    );
}