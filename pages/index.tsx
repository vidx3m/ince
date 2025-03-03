import Link from "next/link";

export default function Home() {
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh", 
            backgroundColor: "#FFFFFF", 
            fontFamily: "Inter, sans-serif", 
            color: "#333", 
            padding: "20px", 
            textAlign: "center"
        }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "600", marginBottom: "10px", color: "#FFA500" }}>
                Insurance, Simplified
            </h1>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", marginBottom: "30px", color: "#555", lineHeight: "1.6" }}>
                The AI-powered insurance comparison platform. Ince scans top insurers to find the most affordable and reliable coverage tailored for you.
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px", flexWrap: "wrap" }}>
                <label style={{ fontSize: "1rem", cursor: "pointer" }}>
                    <input type="checkbox" id="home" name="insuranceType" value="home" style={{ marginRight: "8px" }} /> Home
                </label>
                <label style={{ fontSize: "1rem", cursor: "pointer" }}>
                    <input type="checkbox" id="auto" name="insuranceType" value="auto" style={{ marginRight: "8px" }} /> Auto
                </label>
            </div>
            
            <input 
                type="text" 
                placeholder="Enter Postal Code" 
                style={{ 
                    padding: "12px", 
                    borderRadius: "8px", 
                    width: "280px", 
                    textAlign: "center", 
                    fontSize: "1rem", 
                    border: "1px solid #ccc", 
                    backgroundColor: "#f9f9f9", 
                    color: "#333", 
                    outline: "none", 
                    marginBottom: "20px"
                }}
            />
            
            <br />
            
            <Link href="/get-a-quote">
                <button className="button" style={{ 
                    padding: "12px 24px", 
                    fontSize: "1rem", 
                    borderRadius: "8px", 
                    cursor: "pointer", 
                    backgroundColor: "#FFA500", 
                    color: "white", 
                    border: "none", 
                    transition: "all 0.3s ease-in-out", 
                    fontWeight: "bold" 
                }}>
                    Start
                </button>
            </Link>
            
            <div style={{ 
                marginTop: "50px", 
                maxWidth: "900px", 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                gap: "20px", 
                justifyContent: "center", 
                alignItems: "center",
                width: "100%",
                padding: "20px"
            }}>
                <div style={{ 
                    padding: "20px", 
                    borderRadius: "10px", 
                    backgroundColor: "#f9f9f9", 
                    textAlign: "center", 
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", 
                    transition: "transform 0.3s ease-in-out", 
                }}>
                    <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Step 1</h2>
                    <p style={{ fontSize: "1rem", color: "#555" }}><strong>Enter Your Details:</strong> Provide your postal code and select the type of insurance you need.</p>
                </div>
                <div style={{ 
                    padding: "20px", 
                    borderRadius: "10px", 
                    backgroundColor: "#f9f9f9", 
                    textAlign: "center", 
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", 
                    transition: "transform 0.3s ease-in-out", 
                }}>
                    <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Step 2</h2>
                    <p style={{ fontSize: "1rem", color: "#555" }}><strong>AI Comparison:</strong> Our AI scans multiple insurers to find the best rates for your situation.</p>
                </div>
                <div style={{ 
                    padding: "20px", 
                    borderRadius: "10px", 
                    backgroundColor: "#f9f9f9", 
                    textAlign: "center", 
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", 
                    transition: "transform 0.3s ease-in-out", 
                }}>
                    <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Step 3</h2>
                    <p style={{ fontSize: "1rem", color: "#555" }}><strong>Get Your Quote:</strong> Receive an optimized insurance quote tailored to your needs.</p>
                </div>
            </div>
        </div>
    );
}
