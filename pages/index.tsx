import Link from "next/link";

export default function Home() {
    return (
        <div style={{ 
            textAlign: "center", 
            padding: "50px 20px", 
            backgroundColor: "#0a0f3d", 
            fontFamily: "Ovo, serif", 
            minHeight: "100vh", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            color: "#fff" 
        }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px", color: "orange" }}>
                Insurance, simplified
            </h1>
            <p style={{ fontSize: "1.4rem", maxWidth: "600px", marginBottom: "30px", color: "#ddd", lineHeight: "1.6" }}>
                Your AI-driven insurance comparison platform. Ince compares top insurers to find the most affordable and reliable coverage for you, optimized by AI.
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
                <label style={{ fontSize: "1.2rem", color: "#fff", cursor: "pointer" }}>
                    <input type="checkbox" id="home" name="insuranceType" value="home" style={{ marginRight: "8px" }} /> Home
                </label>
                <label style={{ fontSize: "1.2rem", color: "#fff", cursor: "pointer" }}>
                    <input type="checkbox" id="auto" name="insuranceType" value="auto" style={{ marginRight: "8px" }} /> Auto
                </label>
            </div>
            
            <input 
                type="text" 
                placeholder="Enter Postal Code" 
                style={{ 
                    padding: "14px", 
                    borderRadius: "8px", 
                    width: "280px", 
                    textAlign: "center", 
                    fontSize: "1rem", 
                    border: "none", 
                    backgroundColor: "rgba(255, 255, 255, 0.1)", 
                    color: "white", 
                    outline: "none", 
                    marginBottom: "20px" 
                }}
            />
            
            <br />
            
            <Link href="/get-a-quote">
                <button className="button" style={{ 
                    padding: "14px 30px", 
                    fontSize: "1.2rem", 
                    borderRadius: "10px", 
                    cursor: "pointer", 
                    backgroundColor: "orange", 
                    color: "white", 
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
                    padding: "25px", 
                    borderRadius: "12px", 
                    backgroundColor: "rgba(255, 255, 255, 0.08)", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.1)", 
                    transition: "transform 0.3s ease" 
                }}>
                    <h2 style={{ fontSize: "1.6rem", marginBottom: "10px", color: "#fff" }}>Step 1</h2>
                    <p style={{ fontSize: "1.1rem", color: "#ddd" }}><strong>Enter Your Details:</strong> Provide your postal code and select the type of insurance you need.</p>
                </div>
                <div style={{ 
                    padding: "25px", 
                    borderRadius: "12px", 
                    backgroundColor: "rgba(255, 255, 255, 0.08)", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.1)", 
                    transition: "transform 0.3s ease" 
                }}>
                    <h2 style={{ fontSize: "1.6rem", marginBottom: "10px", color: "#fff" }}>Step 2</h2>
                    <p style={{ fontSize: "1.1rem", color: "#ddd" }}><strong>AI Comparison:</strong> Our AI scans multiple insurers to find the best rates for your situation.</p>
                </div>
                <div style={{ 
                    padding: "25px", 
                    borderRadius: "12px", 
                    backgroundColor: "rgba(255, 255, 255, 0.08)", 
                    textAlign: "center", 
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.1)", 
                    transition: "transform 0.3s ease" 
                }}>
                    <h2 style={{ fontSize: "1.6rem", marginBottom: "10px", color: "#fff" }}>Step 3</h2>
                    <p style={{ fontSize: "1.1rem", color: "#ddd" }}><strong>Get Your Quote:</strong> Receive an optimized insurance quote tailored to your needs.</p>
                </div>
            </div>
        </div>
    );
}