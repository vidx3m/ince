import Link from "next/link";

export default function Home() {
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh", 
            backgroundColor: "#f5f7fa", 
            fontFamily: "Inter, sans-serif", 
            color: "#1a1a1a", 
            padding: "20px", 
            textAlign: "center"
        }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "10px", color: "#ff6b00" }}>
                Insurance, Simplified by AI
            </h1>
            <p style={{ fontSize: "1.3rem", maxWidth: "700px", marginBottom: "40px", color: "#4a4a4a", lineHeight: "1.8" }}>
                AI-driven insurance comparison for smarter savings. Ince finds you the best coverage, effortlessly.
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
                <label style={{ fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <input type="checkbox" id="home" name="insuranceType" value="home" style={{ marginRight: "8px" }} /> Home
                </label>
                <label style={{ fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <input type="checkbox" id="auto" name="insuranceType" value="auto" style={{ marginRight: "8px" }} /> Auto
                </label>
            </div>
            
            <input 
                type="text" 
                placeholder="Enter Postal Code" 
                style={{ 
                    padding: "16px", 
                    borderRadius: "12px", 
                    width: "300px", 
                    textAlign: "center", 
                    fontSize: "1.1rem", 
                    border: "1px solid #ccc", 
                    backgroundColor: "#ffffff", 
                    color: "#1a1a1a", 
                    outline: "none", 
                    marginBottom: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}
            />
            
            <br />
            
            <Link href="/get-a-quote">
                <button className="button" style={{ 
                    padding: "16px 32px", 
                    fontSize: "1.2rem", 
                    borderRadius: "12px", 
                    cursor: "pointer", 
                    backgroundColor: "#ff6b00", 
                    color: "white", 
                    border: "none", 
                    transition: "all 0.3s ease-in-out", 
                    fontWeight: "bold", 
                    boxShadow: "0 4px 12px rgba(255, 107, 0, 0.3)",
                    textTransform: "uppercase"
                }}>
                    Get Started
                </button>
            </Link>
            
            <div style={{ 
                marginTop: "60px", 
                maxWidth: "1100px", 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                gap: "30px", 
                justifyContent: "center", 
                alignItems: "center",
                width: "100%",
                padding: "20px"
            }}>
                <div style={{ 
                    padding: "30px", 
                    borderRadius: "14px", 
                    backgroundColor: "#ffffff", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", 
                    transition: "transform 0.3s ease-in-out", 
                }}>
                    <h2 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#ff6b00" }}>Step 1</h2>
                    <p style={{ fontSize: "1.1rem", color: "#4a4a4a" }}><strong>Enter Your Details:</strong> Provide your postal code and select the type of insurance you need.</p>
                </div>
                <div style={{ 
                    padding: "30px", 
                    borderRadius: "14px", 
                    backgroundColor: "#ffffff", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", 
                    transition: "transform 0.3s ease-in-out", 
                }}>
                    <h2 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#ff6b00" }}>Step 2</h2>
                    <p style={{ fontSize: "1.1rem", color: "#4a4a4a" }}><strong>AI Comparison:</strong> Our AI scans multiple insurers to find the best rates for your situation.</p>
                </div>
                <div style={{ 
                    padding: "30px", 
                    borderRadius: "14px", 
                    backgroundColor: "#ffffff", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", 
                    transition: "transform 0.3s ease-in-out", 
                }}>
                    <h2 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#ff6b00" }}>Step 3</h2>
                    <p style={{ fontSize: "1.1rem", color: "#4a4a4a" }}><strong>Get Your Quote:</strong> Receive an optimized insurance quote tailored to your needs.</p>
                </div>
            </div>
        </div>
    );
}

